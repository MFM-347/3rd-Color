import fs from 'fs'
import { execSync } from 'child_process'

function getGitCommits(sinceTag) {
  try {
    const log = execSync(`git log ${sinceTag}..HEAD --pretty=format:"%h %s"`, {
      stdio: 'pipe',
    }).toString()
    return log
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const [hash, ...messageParts] = line.split(' ')
        return { hash, message: messageParts.join(' ') }
      })
  } catch (error) {
    console.error(`Error fetching git commits: ${error.message}`)
    return []
  }
}

function categorizeCommits(commits) {
  const categories = { Features: [], Fixes: [], Chores: [], Updates: [], Others: [] }

  commits.forEach(({ hash, message }) => {
    const lowerMessage = message.toLowerCase() // Normalize for case variations

    if (lowerMessage.startsWith('feat:')) {
      categories.Features.push(`- ${message} (${hash})`)
    } else if (lowerMessage.startsWith('fix:')) {
      categories.Fixes.push(`- ${message} (${hash})`)
    } else if (lowerMessage.startsWith('chore:') || lowerMessage.startsWith('chore(')) {
      categories.Chores.push(`- ${message} (${hash})`)
    } else if (lowerMessage.startsWith('update:') || lowerMessage.startsWith('update ')) {
      categories.Updates.push(`- ${message} (${hash})`)
    } else {
      categories.Others.push(`- ${message} (${hash})`)
    }
  })

  return categories
}

function generateMarkdown(categories) {
  let markdown = '## Changes\n\n'
  let hasChanges = false

  for (const [category, messages] of Object.entries(categories)) {
    if (messages.length > 0) {
      hasChanges = true
      markdown += `### ${category}\n${messages.join('\n')}\n\n`
    }
  }

  return hasChanges ? markdown.trim() : '## Changes\n\nNo changes found.'
}

function writeChangelog(content) {
  fs.writeFileSync('CHANGELOG.tmp.md', content)
  console.log('CHANGELOG generated successfully.')
}

const sinceTag = process.argv[2] || 'v1.0.0'
const commits = getGitCommits(sinceTag)
const categorizedCommits = categorizeCommits(commits)
const changelogContent = generateMarkdown(categorizedCommits)
writeChangelog(changelogContent)

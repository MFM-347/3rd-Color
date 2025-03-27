import fs from 'fs'
import { execSync } from 'child_process'

function getGitCommits(sinceTag) {
  try {
    const log = execSync(`git log ${sinceTag}..HEAD --pretty=format:"%h %s"`).toString()
    return log
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const parts = line.split(' ')
        return { hash: parts[0], message: parts.slice(1).join(' ') }
      })
  } catch (error) {
    console.error('Error fetching git commits:', error.message)
    return []
  }
}

function categorizeCommits(commits) {
  const categories = { Features: [], Fixes: [], Chores: [], Others: [] }

  commits.forEach(({ hash, message }) => {
    if (message.startsWith('feat:')) {
      categories.Features.push(`- ${message} (${hash})`)
    } else if (message.startsWith('fix:')) {
      categories.Fixes.push(`- ${message} (${hash})`)
    } else if (message.startsWith('chore:')) {
      categories.Chores.push(`- ${message} (${hash})`)
    } else {
      categories.Others.push(`- ${message} (${hash})`)
    }
  })

  return categories
}

function generateMarkdown(categories) {
  let markdown = '# Changelog\n\n## Latest Changes\n'

  for (const [category, messages] of Object.entries(categories)) {
    if (messages.length > 0) {
      markdown += `### ${category}\n${messages.join('\n')}\n\n`
    }
  }

  return markdown
}

function writeChangelog(content) {
  fs.writeFileSync('CHANGELOG.md', content)
  console.log('CHANGELOG.md generated successfully.')
}

const sinceTag = process.argv[2] || 'v1.0.0'
const commits = getGitCommits(sinceTag)
const categorizedCommits = categorizeCommits(commits)
const changelogContent = generateMarkdown(categorizedCommits)
writeChangelog(changelogContent)

#!/usr/bin/env node
/* globals config, cp, ls, pwd, popd, pushd, rm, exec, exit */
/* eslint curly: 0 */
import 'colors'
import 'shelljs/global'
import path from 'path'

// do not die on errors
config.fatal = false

// -----------------------------------------------------------------------------
// constants
const repoRoot = pwd()
const siteRoot = path.join(repoRoot, 'public', '/')
const siteTmpRepo = path.join(repoRoot, 'gh-pages-tmp')

const argv = {
  dryRun: process.argv.includes('-n') || process.argv.includes('--dry-run'),
  verbose: process.argv.includes('--verbose')
}

if (argv.dryRun) console.log('DRY RUN'.magenta)

config.silent = !argv.verbose

// -----------------------------------------------------------------------------
// functions
function printErrorAndExit (error) {
  console.error(error.red)
  exit(1)
}

function run (command) {
  const { code, output } = exec(command)
  if (code !== 0) printErrorAndExit(output)
  return output
}

function safeRun (command) {
  if (argv.dryRun) {
    console.log(`[${command}]`.grey, 'DRY RUN'.magenta)
  } else {
    return run(command)
  }
}

// -----------------------------------------------------------------------------
//
function publish () {
  console.log('Publishing: '.cyan + 'gh-pages'.green)

  run('npm run build')

  rm('-rf', siteTmpRepo)
  run(`git clone -b gh-pages --single-branch git@github.com:alexkval/moment-in-rb.git ${siteTmpRepo}`)
  pushd(siteTmpRepo)
  rm('-rf', ls(siteTmpRepo).filter(file => file !== '.git')) // delete all but `.git` dir
  cp('-R', siteRoot, siteTmpRepo)
  safeRun('git add -A .')
  safeRun('git commit -m "Publish site"')
  safeRun('git push')
  popd()
  if (argv.dryRun) {
    console.log(`[rm -rf ${siteTmpRepo}]`.grey, 'DRY RUN'.magenta)
  } else {
    rm('-rf', siteTmpRepo)
  }
  console.log('Published: '.cyan + 'gh-pages'.green)
}

// -----------------------------------------------------------------------------
//
publish()

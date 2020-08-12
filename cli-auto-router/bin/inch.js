#!/usr/bin/env node
// 第一行是指定脚本解释器为node，对于shell来说需要约定解释类型

const program = require('commander')
const pkg = require('../../package.json')

program.version(pkg.version)

program
    .command('init <name>')
    .description('init project   ')
    .action(require('../lib/init'))

program
    .command('refresh')
    .description('refresh routers and menu')
    .action(require('../lib/refresh'))

program.parse(process.argv) // 解析主进程参数













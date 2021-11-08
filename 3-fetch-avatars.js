'use strict';

const { exec } = require('child_process');

const students = require('./students.json');

for (const student of students) {
  console.log(student.name, ': ', student.userName);

  exec(
    `cd ./${student.userName} && npm run fetch:student`,
    err => err && console.error(err)
  );
}

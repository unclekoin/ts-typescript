const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
  console.log(skill.toLowerCase());
}

const res = skills
  .filter((skill: string) => skill !== 'DevOps')
  .map((skill) => skill + '!');

console.log(res);
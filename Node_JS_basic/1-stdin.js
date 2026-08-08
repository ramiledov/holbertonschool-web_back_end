process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  if (input !== null) {
    process.stdout.write(`Your name is: ${input.toString().replace('\n', '')}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('\nThis important software is now closing\n');
});

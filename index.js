const { execSync } = require('child_process');

try {
  // Get the target branch from the push
  const pushInfo = execSync('git rev-parse --symbolic-full-name --abbrev-ref HEAD').toString().trim();

  if (pushInfo === 'main') {
    console.log('Redirecting push from main to PriVM...');
    execSync('git push origin HEAD:PriVM');
    console.log('Pushed to PriVM branch successfully.');
  } else {
    // Allow normal push
    execSync('git push');
  }
} catch (error) {
  console.error('Error during pre-push:', error.message);
  process.exit(1);
}

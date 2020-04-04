<h1>Rupee Game</h1>

<h4>Link</h4>
<p>https://cdvincent.github.io/Rupee-Game/</p>

<h4>Technology Used</h4>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
</ul>

<h2>Description</h2>
<p>Rupee Game is a simple game where the user must match their score to the randomized target number.</p>

<p>Each Rupee contains a random value each game. Click a Rupee to add that Rupees value to the users score.</p>

<p>If the score matches the target score, a win is counted. If the value exceeds the value of the target score, a lose is counted.</p>

<p>The users wins and losses will be recorded at the bottom of the page.</p>

<h2>Development</h2>
<p>This game uses Javascript and Jquery to assign the crystals values between 1-12 using the Math.random() function. The same function is used to assign the target number for each new game.</p>

<p>There are variables to hold the users current score, as well as for their wins and losses. Jquery is used to dynamically update the statistics. There is a restart function that fires once the user wins or loses, assigning a new target number, resetting the users score to 0, and assigning the crystals new values. There is an IF function to ensure that all crystals will have unique values.</p>
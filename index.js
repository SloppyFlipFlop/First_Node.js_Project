const http = require("http");

// const fs = require("fs");

const os = require("os");

const userInfo = os.userInfo();

console.log(userInfo);

http
  .createServer()
  .on("request", (req, res) => {
    switch (req.url) {
      case "/": {
        res.end(`
      <h1 style="text-align: center; color: #27476E;">The Secret Society of Old Man Jenkins Porject</h1>
      <br>
      <h3>Rules:</h3>
      <ul>
      <li>type answers into the url(all answers are lower case)</li>
      
      </ul>
      <br>
      <p>You just blacked out because you figured out all the riddles of the Secret Society of Old Man Jenkins. But when you wake up, a man is standing right in front of you tells you that those riddles and puzzles given to you by the society to solve in order to join the society was just the beginning of a long journaling you're going to have to take in order to be able to join the society and for some reason you remember that he told you all this while having his eyes wide open.

      But right before he runs away from you like you're some kind of crazy person. He hands you a piece of paper. Which when you look at it has an upside down smiling face; but you realize it’s not drawn upside down. You just have the paper upside down. Nevertheless your dumbness doesn’t stop you from realizing that the paper has another side with it and when you look at the other side. It says “It can fill a room without occupying space. What is that?”. You put the piece of paper back into your pocket and try to figure out the question.
      </p>
      <br>
      <p>HMMM???</p>
      <br>
      <br>
      <br>
      <details style="">
      <summary>Click for hint</summary>
      <p>Has something to do with light</p></details>
      `);
      break;
      }

      case "/light": {
        res.end(`
        <h1 style="text-align: center; color: #27476E;">WHOA ${userInfo.username} you have a BIG brain :O <h1>
  
        <p>next riddle: 
        What has to be broken before you can use it?</p>
        `);
        break;
      }

      case "/light/hint": {
        res.end(`
        it comes out of a chicken
        `);
      }

      case "/egg": {
        res.end(`
        <h1>WHOA ${userInfo.username} you have a BIG brain :O <h1>
  
        <p>next riddle: 
        I’m tall when I’m young, and I’m short when I’m old. What am I?
        `);
        break;
      }

      case "/egg/hint": {
        res.end(`
        it produces light
        `);
      }

      case "/candle": {
        res.end(`
        <h4>WHOA ${userInfo.username} you have a BIG brain :O <h4>
  
        <p>next riddle: 
        What is always in front of you but can’t be seen?
        `);
        break;
      }

      case "/candle/hint": {
        res.end(`
        it starts with a f
        `)
      }

      case "/future": {
        res.end(`
        <h1>WHOA ${userInfo.username} you have a BIG brain :O <h1>
  
        <p>next riddle: 
        What goes up but never comes down?
        `);
        break;
      }

      case "/future/hint": {
        res.end(`
        it has to do with yourself
        `)
      }

      case "/age": {
        res.end(`
        <h4>WHOA ${userInfo.username} you have a BIG brain :O <h4>
  
        <p>next riddle: 
        A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?
        `);
        break;
      }

      case "/age/hint": {
        res.end(`
        it has to do with his hair
        `)
      }

      case"/bald": {
        res.end(`
        <h4>WHOA ${userInfo.username} you have a BIG brain :O <h4>
  
        <p>winner
        `);
        break;
      }

      

    
      case "*": {
        res.end("404");
        break;
      }
    }
  })
  .listen(3000, () => {
    console.log("The server is listing");
  });

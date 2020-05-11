# DiscordBot

## What is Discord? (Sorry if you already know what Discord is.)
<p align="justify">
Well discord in a nutshell is an application where you can join or create servers and send messages in text channels. It's kinda like Slack, but for gaming purposes. And this is where the Commandable Bot comes in to place.
</p>

## How does it work?
<p align="justify">
Well first of all Discord has its own nodeJs implementation of their API, it gives you event listeners and cool methods, but you need to create your own logic and functionalities.
</p>
<p align="justify">
Since commands are very similar to routes, I wrote the commander to work almost exactly like a route. It has a Router called Commander and Controllers called Commanders. It works very similar to how symfony works.

There is a file commands/commands.json which contains the command routes.
```
{
  "name": "meme",
  "commander": "MemeCommander::giveMeme",
  "parameters": "{sub_reddit_slug?}",
  "description": []
},
```
This route fires every time someone writes <code>$meme</code>
Notice that the parameter is optional because of the "?"
</p>

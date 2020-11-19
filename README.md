# DiscordBot

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

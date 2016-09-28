# susd-page-parser

A function which, given the html from the [games](https://www.shutupandsitdown.com/games-page/)/[videos](https://www.shutupandsitdown.com/videos-page/) pages at shutupandsitdown.com, spits out a data structure.

Example output:

```
[ { url: 'https://www.shutupandsitdown.com/games/dead-of-winter-the-long-night/',
    title: 'Dead of Winter: The Long Night',
    imageUrl: 'https://www.shutupandsitdown.com/wp-content/uploads/2016/09/pic2906832.jpg',
    tags:
     [ 'dead-of-winter-the-long-night',
       'susd-recommends',
       'heavy-games',
       'bluffing-games',
       'expansions' ] },
  { url: 'https://www.shutupandsitdown.com/games/inis/',
    title: 'Inis',
    imageUrl: 'https://www.shutupandsitdown.com/wp-content/uploads/2016/08/pic3112623_lg.jpg',
    tags: [ 'inis', 'susd-recommends', 'war-games', 'games-for-two' ] } ]
```

# License

[WTFPL](http://wtfpl2.com)

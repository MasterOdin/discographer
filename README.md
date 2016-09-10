# trouvaille
Searches through your iTunes music library finding those albums that you're missing. This is a python application based off (samrayner/discographer)[https://github.com/samrayner/discographer] with some major differences (which couldn't be done that well on a client based website). 

The design goals of the application are going to be:

1. Run through both commandline and website
2. It caches the results (so it's easy to reference the last run at anytime)  
3. Ability to ignore artists to check Spotify against  
  * I don't want to be shown artists I will only ever has a complete hits for. I don't care I'll never have all 10 of their albums, 
  I'm fine with just the best of.
4. Ability to ignore albums on Spotify
  * Sometimes Spotify tells me I'm missing the Deluxe/Regular version of an album when I've got the Regular/Deluxe version of the album
  and I don't want to keep getting told
5. Manually link local albums to Spotify albums
  * Sometimes Spotify doesn't have a deluxe version of an album that I do and I want to just associate it with the regular version on
  Spotify
6. Better filtering options (don't show complete artists, only show missing albums on artist, etc.)
  * I don't need to see all the artists that are currently complete all the time just to have to click through to find the ones I'm 
  missing
7. List any local albums not found on Spotify
  * Similar to 5, but I want to have this information immediately available to me to view to assist in dealing with points 4 and 5.

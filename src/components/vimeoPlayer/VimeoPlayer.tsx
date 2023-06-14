import React, { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

function VimeoPlayer({
  videoId,
  onWatchedPercentageChange,
  watchedPercentage,
}) {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new Player(playerRef.current, { id: videoId });

    player.ready().then(() => {
      player.getDuration().then((duration) => {
        player.setCurrentTime(watchedPercentage * duration);
      });

      player.on("play", function () {
        console.log("played the video!");
      });

      player.on("timeupdate", function (data) {
        player
          .getDuration()
          .then((duration) => {
            const newWatchedPercentage = (
              (data.seconds / duration) *
              100
            ).toFixed(2);
            onWatchedPercentageChange(newWatchedPercentage);
            console.log(`Watched ${newWatchedPercentage}% of the video`);
          })
          .catch((err) => {
            console.error("Error getting video duration:", err);
          });
      });
    });

    return () => {
      player.destroy();
    };
  }, [videoId]);

  return (
    <div>
      <div ref={playerRef} />
    </div>
  );
}

export default VimeoPlayer;

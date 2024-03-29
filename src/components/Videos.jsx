import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
function  Videos({ videos, direction }) {
  if(!videos?.length) return "loading..."
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map(
        (item, idx) =>
          (item.id.channelId || item.id.videoId) && (
            <Box key={idx} width={{ xs: "100%", sm:"320px"}}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
      )}
    </Stack>
  );
}

export default Videos;

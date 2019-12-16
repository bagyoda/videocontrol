package com.vending.videocontrol.video;

import com.vending.videocontrol.exceptions.VideoCreationException;
import com.vending.videocontrol.video.dto.VideoDTO;

import java.util.List;

public interface VideoService {
  List<VideoResponse> loadVideos();
  VideoResponse saveNewVideo(VideoDTO videoDTO) throws VideoCreationException;
  void setVideoToPlayList(String name);
  void unsetVideoFromPlayList(String name);
  void deleteFromDB(Long id);
}

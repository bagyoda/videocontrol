package com.vending.videocontrol.video;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VideoListResponse {
  private String status;
  private List<VideoResponse> videos;

  public VideoListResponse(List<VideoResponse> videos) {
    this.status = "ok";
    this.videos = videos;
  }
}

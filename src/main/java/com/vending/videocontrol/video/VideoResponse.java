package com.vending.videocontrol.video;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VideoResponse {

  private Long id;
  private String name;
  private String length;
  private String description;
  private String playList;

  public VideoResponse(Video video) {
    this.id = video.getId();
    this.name = video.getName();
    this.length = video.getLength();
    this.description = video.getDescription();
    this.playList = String.valueOf(video.isPlayList());
  }
}

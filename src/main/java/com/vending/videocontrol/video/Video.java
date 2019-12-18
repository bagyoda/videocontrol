package com.vending.videocontrol.video;

import com.vending.videocontrol.video.dto.VideoDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "videos")
public class Video {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String length;
  private String description;
  private Timestamp created;
  private boolean playList;

  public Video(VideoDTO videoDTO) {
    this.name = videoDTO.getName();
    this.length = videoDTO.getLength();
    this.description = videoDTO.getDescription();
    this.created = new Timestamp(System.currentTimeMillis());
    this.playList = videoDTO.isPlayList();
  }
}

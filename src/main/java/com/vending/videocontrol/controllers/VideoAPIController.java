package com.vending.videocontrol.controllers;

import com.vending.videocontrol.error.StatusError;
import com.vending.videocontrol.exceptions.VideoCreationException;
import com.vending.videocontrol.video.dto.DeleteDTO;
import com.vending.videocontrol.video.dto.UpdateDTO;
import com.vending.videocontrol.video.dto.VideoDTO;
import com.vending.videocontrol.video.VideoListResponse;
import com.vending.videocontrol.video.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
public class VideoAPIController {

  private VideoService videoService;

  @Autowired
  public VideoAPIController(VideoService videoService) {
    this.videoService = videoService;
  }

  @GetMapping("/videos")
  public ResponseEntity getAllVideos() {
    try {
      return ResponseEntity.status(200).body(videoService.loadVideos());
    } catch (Exception e) {
      return ResponseEntity.status(400).body(new StatusError(e.getMessage()));
    }
  }

  @PostMapping("/video/save")
  public ResponseEntity saveVideo(@Valid @RequestBody VideoDTO videoDTO) {
    try {
      return ResponseEntity.status(200).body(videoService.saveNewVideo(videoDTO)) ;
    } catch (VideoCreationException e) {
      return ResponseEntity.status(400).body(new StatusError(e.getMessage()));
    }
  }

  @PutMapping("/video/set")
  public ResponseEntity setVideoToPlayList(@Valid @RequestBody UpdateDTO dto) {
    try {
      videoService.setVideoToPlayList(dto.getName());
      return ResponseEntity.status(200).build();
    } catch (Exception e) {
      return ResponseEntity.status(400).body(e.getMessage());
    }
  }

  @PutMapping("/video/unset")
  public ResponseEntity UnsetVideoFromPlaylist(@Valid @RequestBody UpdateDTO dto) {
    try {
      videoService.unsetVideoFromPlayList(dto.getName());
      return ResponseEntity.status(200).build();
    } catch (Exception e) {
      return ResponseEntity.status(400).body(e.getMessage());
    }
  }

  @DeleteMapping("/video/delete")
  public ResponseEntity deleteVideo(@Valid @RequestBody DeleteDTO dto) {
    try {
      videoService.deleteFromDB(dto.getId());
      return ResponseEntity.status(200).build();
    } catch (Exception e) {
      return ResponseEntity.status(400).body(e.getMessage());
    }
  }

}

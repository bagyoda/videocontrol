package com.vending.videocontrol.video;

import com.vending.videocontrol.exceptions.VideoCreationException;
import com.vending.videocontrol.video.dto.VideoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VideoServiceImpl implements VideoService {

  private VideoRepository videoRepository;

  @Autowired
  public VideoServiceImpl(VideoRepository videoRepository) {
    this.videoRepository = videoRepository;
  }

  @Override
  public List<VideoResponse> loadVideos() {
    List<Video> videoList = videoRepository.findAll();
    List<VideoResponse> responseList = new ArrayList<>();
    for (Video v : videoList) {
      responseList.add(new VideoResponse(v));
    }
    return responseList;
  }

  @Override
  public VideoResponse saveNewVideo(VideoDTO videoDTO) throws VideoCreationException {
    if (isNameTaken(videoDTO.getName())) {
      throw new VideoCreationException("Name has already been taken!");
    }

    Video v = videoRepository.save(new Video(videoDTO));
    if (v != null) {
      return new VideoResponse(videoRepository.save(v));
    }

    throw new VideoCreationException("Cannot create video!");
  }

  private boolean isNameTaken(String name) {
    return videoRepository.findVideoByName(name).isPresent();
  }

  @Override
  public void setVideoToPlayList(String name) {
    Video v = videoRepository.findVideoByName(name).get();
    v.setPlayList(true);
    videoRepository.save(v);
  }

  @Override
  public void unsetVideoFromPlayList(String name) {
    Video v = videoRepository.findVideoByName(name).get();
    v.setPlayList(false);
    videoRepository.save(v);
  }

  @Override
  public void deleteFromDB(Long id) {
    videoRepository.deleteById(id);
  }
}


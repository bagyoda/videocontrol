package com.vending.videocontrol.video;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface VideoRepository extends CrudRepository <Video, Long> {
  List<Video> findAll();
  Video save(Video video);
  Optional<Video> findVideoByName(String name);
  void deleteByName(String name);
}

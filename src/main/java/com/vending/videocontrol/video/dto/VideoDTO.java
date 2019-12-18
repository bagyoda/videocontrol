package com.vending.videocontrol.video.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VideoDTO {

  @NotNull(message = "Please provide a name")
  @NotBlank(message = "Please provide a name")
  private String name;
  @NotNull(message = "Please provide length")
  @NotBlank(message = "Please provide length")
  private String length;
  private String description;
  private boolean playList;
}

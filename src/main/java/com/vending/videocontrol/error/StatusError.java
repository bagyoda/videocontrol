package com.vending.videocontrol.error;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class StatusError {

  private String status;
  private String error;

  public StatusError(String error) {
    this.status = "error";
    this.error = error;
  }
}

package com.vending.videocontrol.exceptions;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class StatusMessage {

  private String status;
  private String message;

  public StatusMessage(String message) {
    this.status = "error";
    this.message = message;
  }
}

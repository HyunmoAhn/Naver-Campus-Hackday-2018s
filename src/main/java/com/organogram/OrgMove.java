package com.organogram;

public enum OrgMove {
  UP("UP"), IN("IN"), DOWN("DOWN");

  private final String value;

  OrgMove(String value) {
    this.value = value;
  }

  String getValue()  {
    return this.value;
  }
}

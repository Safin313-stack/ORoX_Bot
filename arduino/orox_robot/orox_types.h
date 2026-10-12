#ifndef OROX_TYPES_H
#define OROX_TYPES_H

#include <Arduino.h>
#include "orox_rgb.h"

// Operating Modes
enum RobotOperatingMode {
  OP_COMPANION,
  OP_POMODORO,
  OP_NIGHTSTAND,
  OP_PET
};

// AI Response Structure
struct AIResponse {
  String replyText;
  int faceIndex;
  RGBTheme theme;
  enum Action { 
    ACT_TALK, 
    ACT_TIME, 
    ACT_WEATHER, 
    ACT_PUFFER, 
    ACT_VOMIT, 
    ACT_JOKE, 
    ACT_DANCE, 
    ACT_POMODORO 
  } action;
};

#endif

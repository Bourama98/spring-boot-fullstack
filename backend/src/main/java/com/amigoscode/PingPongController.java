package com.amigoscode;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingPongController {
    record PingPong(String result) {
    }

    @GetMapping("/ping")
    private PingPong getPingPong() {
        return new PingPong("pong: Mangara May 30 25 added Slack 5-31-2025 01:50-7778887788");
    }
}

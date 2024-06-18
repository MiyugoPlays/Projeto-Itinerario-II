package com.example.didatico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.didatico.model.Videos;
import com.example.didatico.repository.VideosRepository;

@RestController
@RequestMapping("/api/videos")
public class VideosController {
    @Autowired
    private VideosRepository videosRepository;

    @GetMapping
    public List<Videos> getAllVideos() {
        return videosRepository.findAll();
    }

    @PostMapping
    public Videos createVideo(@RequestBody Videos videos) {
        return videosRepository.save(videos);
    }
}

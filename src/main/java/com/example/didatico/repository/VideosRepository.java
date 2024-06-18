package com.example.didatico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.didatico.model.Videos;

public interface VideosRepository extends JpaRepository<Videos, Long> {
}

package com.example.educacional.repository;

import com.example.educacional.model.Ebook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EbookRepository extends JpaRepository<Ebook, Long> {
}

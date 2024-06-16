package com.example.educacional.controller;

import com.example.educacional.model.Ebook;
import com.example.educacional.repository.EbookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ebooks")
public class EbookController {
    @Autowired
    private EbookRepository ebookRepository;

    @GetMapping
    public List<Ebook> getAllEbooks() {
        return ebookRepository.findAll();
    }

    @PostMapping
    public Ebook createEbook(@RequestBody Ebook ebook) {
        return ebookRepository.save(ebook);
    }
}

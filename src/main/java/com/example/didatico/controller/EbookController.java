package com.example.didatico.controller;

import com.example.didatico.model.Ebook;
import com.example.didatico.repository.EbookRepository;
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

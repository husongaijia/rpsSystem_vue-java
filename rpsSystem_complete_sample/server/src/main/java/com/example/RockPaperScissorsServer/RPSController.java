package com.example.RockPaperScissorsServer;


import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api")
public class RPSController {

    RPSRepository rpsRepository;

    public RPSController(RPSRepository rpsRepository) {
        this.rpsRepository = rpsRepository;
    }

    @PostMapping("rps")
    public Result play(@RequestBody Hands hands) {
        return rpsRepository.play(hands);
    }
}

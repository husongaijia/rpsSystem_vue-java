package com.example.RockPaperScissorsServer;

import org.springframework.stereotype.Repository;

@Repository
public class DefaultRPSRepository implements RPSRepository {
    @Override
    public Result play(Hands hands) {
        if (hands.getP1().equalsIgnoreCase(hands.getP2())) {
            return new Result("DRAW");
        }

        if (hands.getP1().equalsIgnoreCase("ROCK") && hands.getP2().equalsIgnoreCase("SCISSORS") ||
                hands.getP1().equalsIgnoreCase("PAPER") && hands.getP2().equalsIgnoreCase("ROCK") ||
                hands.getP1().equalsIgnoreCase("SCISSORS") && hands.getP2().equalsIgnoreCase("PAPER")) {

            return new Result("P1WINS!!");
        }

        return new Result("P2WINS!!");
    }
}

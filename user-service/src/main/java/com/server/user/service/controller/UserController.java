package com.server.user.service.controller;

import org.springframework.web.bind.annotation.*;

import com.server.user.service.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

}

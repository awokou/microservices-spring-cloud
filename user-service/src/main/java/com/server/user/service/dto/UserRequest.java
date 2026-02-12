package com.server.user.service.dto;

public record UserRequest(
        Integer id,
        String name,
        String email,
        String password) {
}
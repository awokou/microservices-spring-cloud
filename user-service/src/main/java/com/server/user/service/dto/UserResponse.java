package com.server.user.service.dto;

public record UserResponse(
        Integer id,
        String name,
        String email) {
}

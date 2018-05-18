package com.organogram;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {
  List<User> list();
}

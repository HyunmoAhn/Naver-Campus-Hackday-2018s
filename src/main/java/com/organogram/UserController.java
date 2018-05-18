package com.organogram;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin (origins = "*")
@RestController
public class UserController {

  @Autowired
  UserMapper userMapper;

  @RequestMapping(value = "/users", method = RequestMethod.GET)
  public List<User> user() {
    return userMapper.list();
  }
}

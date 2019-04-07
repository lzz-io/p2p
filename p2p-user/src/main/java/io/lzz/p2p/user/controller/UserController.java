/*
 * Copyright qq:1219331697
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.lzz.p2p.user.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 * @author q1219331697
 */
@RestController
@RequestMapping("/user")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private Environment environment;

    // 当application.yml配置文件中没有指定服务启动端口时，
    // 不能使用@LocalServerPort和@Value(
    // "${local.server.port}")的方法获取端口号，
    // 只能使用environment的方式
    @Value("${local.server.port:-1}")
    private int port;

    public String getPort() {
        return environment.getProperty("local.server.port");
    }

    public String getIp() {
        InetAddress localHost = null;
        try {
            localHost = Inet4Address.getLocalHost();
        } catch (UnknownHostException e) {
            log.error(e.getMessage(), e);
        }
        // 返回格式为：xxx.xxx.xxx
        String ip = localHost.getHostAddress();
        // localHost.getHostName() 一般是返回电脑用户名
        return ip;
    }

    @GetMapping(value = "")
    public String index() {
        return "index ip=" + getIp() + " port=" + getPort() + " " + System.currentTimeMillis();
    }

}

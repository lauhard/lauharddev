---
title: 'Linux Cheatsheet'
excerpt: 'Linux Cheatsheet'
created: 'Nov 03, 2024'
author: 'Andreas Lauhard'
categories:
    - linux
    - cheatsheet
    - terminal
published: true
---


### Open dir from terminal

```bash
xdg-open .
```

### Copy file to clipboard

```bash
echo -n $filename | xclip -selection clipboard
```

### Create symlink (symbolic link)

```bash
sudo ln -s /path/to/target /path/to/symlink
```

### Show ip address

```bash
ip addr show
```

### Update server

```bash
apt upgrade

apt udate
```

### Manage services

```bash
systemctl [start|stop|restart|status|enable|disable] [servicename]
```

### Show ip address

```bash
ip addr show
```

### update server

```bash
apt upgrade
apt udate
```

### Check if server needs reboot

```bash
cat /var/run/reboot-required
```

### list storage devices

```bash
lsblk
```

### move files to another directory

```bash
mv /path/to/file /path/to/destination
```

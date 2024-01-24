## 快捷导航
- **schedule/:**
  - **meetings/:**
      - [standard.md](docs/schedule/meetings/standard.md)
      - [2024-1-24.md](docs/schedule/meetings/2024-1-24.md)
    - [todolist.md](docs/schedule/todolist.md)
- **papers/:**
    - [Point-SLAM Dense Neural Point Cloud-based SLAM.pdf](docs/papers/Point-SLAM%20Dense%20Neural%20Point%20Cloud-based%20SLAM.pdf)
    - [neuralrecon.pdf](docs/papers/neuralrecon.pdf)
- **tutorials/:**
  - **VCS/:**
    - **github/:**
        - [SSH_keypair_setup_for_GitHub.md](docs/tutorials/VCS/github/SSH_keypair_setup_for_GitHub.md)
      - [git.md](docs/tutorials/VCS/git.md)
  - **shell/:**
      - [CMD.md](docs/tutorials/shell/CMD.md)
      - [powershell.md](docs/tutorials/shell/powershell.md)
    - [KnowledgeHub.md](docs/tutorials/KnowledgeHub.md)
  - **basic_tools/:**
      - [use_vpn.md](docs/tutorials/basic_tools/use_vpn.md)
      - [git-install-instruction.md](docs/tutorials/basic_tools/git-install-instruction.md)
      - [README.md](docs/tutorials/basic_tools/README.md)
- **Excalidraw/:**
    - [Drawing 2024-01-24 11.42.08.excalidraw.md](docs/Excalidraw/Drawing%202024-01-24%2011.42.08.excalidraw.md)
  - [百度网盘.md](docs/百度网盘.md)
- **C++/:**
  - **STL/:**
      - [set.md](docs/C++/STL/set.md)
      - [unordered_map.md](docs/C++/STL/unordered_map.md)
      - [algorithm.md](docs/C++/STL/algorithm.md)
      - [stack.md](docs/C++/STL/stack.md)
      - [unordered_set.md](docs/C++/STL/unordered_set.md)
      - [Queue.md](docs/C++/STL/Queue.md)
      - [vector.md](docs/C++/STL/vector.md)
      - [String.md](docs/C++/STL/String.md)
      - [map.md](docs/C++/STL/map.md)
    - [syntax.md](docs/C++/syntax.md)
## 最近修改
### 2024-01-24 by Atticuszz - 2024-01-24 18:33:54: ...
- 🔨 [todolist.md](docs/schedule/todolist.md)
### 2024-01-24 by Atticuszz - Update README.md automatically
- 🔨 [2024-1-24.md](docs/schedule/meetings/2024-1-24.md)
### 2024-01-24 by Atticuszz - 2024-01-24 17:54:15: 添加了会议资源
- 🔨 [2024-1-24.md](docs/schedule/meetings/2024-1-24.md)
### 2024-01-24 by Atticuszz - Update README.md automatically
- 🔨 [Drawing 2024-01-24 11.42.08.excalidraw.md](docs/Excalidraw/Drawing%202024-01-24%2011.42.08.excalidraw.md)
- 🔨 [2024-1-24.md](docs/schedule/meetings/2024-1-24.md)
### 2024-01-24 by Atticuszz - vault backup: 2024-01-24 17:01:43
- 🚚 [Drawing 2024-01-24 11.42.08.excalidraw.md](docs/Excalidraw/Drawing%202024-01-24%2011.42.08.excalidraw.md) <- Drawing 2024-01-24 11.42.08.excalidraw.md
- ✨ [neuralrecon.pdf](docs/papers/neuralrecon.pdf)
- 🔨 [2024-1-24.md](docs/schedule/meetings/2024-1-24.md)
### 2024-01-24 by Atticuszz - Update README.md automatically
- 🔨 [KnowledgeHub.md](docs/tutorials/KnowledgeHub.md)
### 2024-01-24 by Atticuszz - 我添加了一句话
- 🔨 [KnowledgeHub.md](docs/tutorials/KnowledgeHub.md)
### 2024-01-24 by Atticuszz - Update README.md automatically
- 🔨 [2024-1-24.md](docs/schedule/meetings/2024-1-24.md)
- 🔨 [standard.md](docs/schedule/meetings/standard.md)
- 🔨 [todolist.md](docs/schedule/todolist.md)
### 2024-01-24 by Atticuszz - 2024-01-24 12:12:49: ...
- 🚚 [2024-1-24.md](docs/schedule/meetings/2024-1-24.md) <- meetings.md
- ✨ [standard.md](docs/schedule/meetings/standard.md)
- ✨ [todolist.md](docs/schedule/todolist.md)
### 2024-01-12 by Atticuszz - Update README.md automatically
- 🔨 [map.md](docs/C++/STL/map.md)
## 其他仓库

### 论文速览

1. [GitHub - eriksandstroem/Point-SLAM: Point-SLAM: Dense Neural Point Cloud-based SLAM](https://github.com/eriksandstroem/Point-SLAM)
   - ![](https://github.com/eriksandstroem/Point-SLAM/raw/main/media/office_4.gif)
2. [GitHub - youmi-zym/GO-SLAM: [ICCV2023] GO-SLAM: Global Optimization for Consistent 3D Instant Reconstruction](https://github.com/youmi-zym/GO-SLAM)
   - ![](https://github.com/youmi-zym/GO-SLAM/raw/main/images/comparison.png)
3. [GitHub - HengyiWang/Co-SLAM: [CVPR'23] Co-SLAM: Joint Coordinate and Sparse Parametric Encodings for Neural Real-Time SLAM](https://github.com/HengyiWang/Co-SLAM)
   - ![https://github.com/HengyiWang/Co-SLAM/raw/main/media/coslam_teaser.gif](https://github.com/HengyiWang/Co-SLAM/raw/main/media/coslam_teaser.gif)

**[仓库使用教程](docs/tutorials/KnowledgeHub)**

### 常见问题和禁忌

#### 合并远程内容失败

- 当前仓库目录下运行

```PowerShell
git stash           # 保存未提交的更改
git fetch --all
git reset --hard origin/main
git stash pop       # 重新应用之前保存的更改
```

#### 文件命名目录名要求

1. 尽量不要有空格，空格会影响markdown链接的生成
2. 尽量不要用中文命名，不知道用哪个单词先搜一下，养成英文环境的好习惯

#### 大文件不要放到仓库

- 大文件100mb以上的需要使用git-lfs来推送 _或者直接放在release页面，单独上传文件_

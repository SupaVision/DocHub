- path env

```
C:\Users\18317\anaconda3\Scripts
```

### proxy for clash

- add and test

```bash
conda config --set proxy_servers.http http://127.0.0.1:7890
conda config --set proxy_servers.https https://127.0.0.1:7890
conda config --show proxy_servers
conda install --dry-run fastapi
```

- remove

```bash
conda config --remove-key proxy_servers
conda config --show proxy_servers
conda install --dry-run fastapi
```

### channels

- 3rd

```bash
conda config --add channels conda-forge
conda config --set channel_priority strict
```

```bash
conda config --show channels
```

### install deps

- install from env.yml

```bash
conda env create -f env.yml
```

- output current env deps to env.yml

```bash
conda env export --file env.yml
```

- update from env.yml `--prune` for auto update deps

```bash
conda env update -f env.yml
```

- install by auto update deps

```bash
conda install <package> --update-all
```

### info check

- show conda info

```bash
conda info
```

- show all conda envs

```bash
conda env list
```

- current env packages

```bash
conda list
```

- specified env packages

```bash
conda list -n <env>
```
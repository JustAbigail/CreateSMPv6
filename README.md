# CreateSMPv6
A Create modpack centred around complex automation lines and Create Aeronautics, made for SMPs

## Installation
Download `packwiz-installer-bootstrap.jar` from its official site at [packwiz.infra.link](https://packwiz.infra.link) and place it in the `[.]minecraft` folder of your respective instance.

Locate your launcher's Custom Commands or Launch hooks section and set the following as the pre-launch command/hook: `java -jar packwiz-installer-bootstrap.jar <URL>`


This requires java to be in your `PATH`, which should already be the case for the vast majority of machines. The official wiki suggests using `$(INST_JAVA)` to avoid that, however that has lead to unforeseen complications for me.

For `<URL>`, substitute one of the following:

|Desired version|`<URL>`|Notes|
|-|-|-|
|Latest development version|[https://raw.githubusercontent.com/JustAbigail/CreateSMPv6/refs/heads/dev/pack.toml]()|This is the latest version as appears here. As such it is highly susceptible to bugs, and in fact, not guaranteed to launch at all.|
|Others|...|More download options to be implemented as the project progresses|
---

### Note to devs
Files in `/dev` from the repository root are not included in pack deployment, yet are included in git version tracking,
and as such dedicated to files needed only for development. \
**Directory name is subject to change**

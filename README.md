# typescript-course
Complete course of backend using typescript
 
# Configure github commits and logs 
git config --global core.editor code = set the visual studio to edit alias
git config --global --edit = open to edit alias 
 
After you can set the alias with:
[alias] 
- s = !git status -s 
- c = !git add --all && git commit -m 
- l = !git log --pretty=format:'%C(blue) %h%C(red)%d  %C(white) %s - %C(cyan) %cn,  %C(green) %cr'
to personalize your git. 

# install eslint stardard to typescript 
npm install --save-dev eslint@6 eslint-plugin-standard@4 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@9 @typescript-eslint/eslint-plugin@2 eslint-config-standard-with-typescript
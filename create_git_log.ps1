
$LOG_FILE = "git_history.log"

$DATE = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

Clear-Content -Path $LOG_FILE -ErrorAction SilentlyContinue

Add-Content -Path $LOG_FILE -Value "Log generated on: $DATE"

git log --pretty=format:"%h - %an, %ar : %s" | Out-File -Append -FilePath $LOG_FILE

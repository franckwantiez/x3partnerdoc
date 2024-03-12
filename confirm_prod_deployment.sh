current_branch="$(git branch --show-current)"

echo -e "Current branch: $current_branch\n"

declare -a branchList=$(git branch -r --list "*2*.R*")

echo -e "Branch list: "
echo -e "$branchList\n"

readarray arr -t $branchList < <(printf '%s\n' "${branchList[@]}" | sort)

echo -e "Sorted remote branch list :"
echo -e "${arr[@]}\n"

for e in "${!arr[@]}"; do
    arr[$e]=${arr[$e]//"  origin/"/}
done

echo -e "Formatted branch list:"
echo -e "${arr[@]}\n"

if [ ${arr[-1]} = "$current_branch" ]; then
    echo "HAS_TO_BE_DEPLOYED=0" >> "$GITHUB_OUTPUT"

else
    echo "HAS_TO_BE_DEPLOYED=1" >> "$GITHUB_OUTPUT"
fi
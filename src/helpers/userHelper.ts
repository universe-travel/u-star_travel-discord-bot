import { Client, GuildMember, PartialGuildMember, Role } from 'discord.js'

// @ts-ignore
const history: [{
  identifier: string,
  nickname: string,
}] = []

const handleChange = async (client: Client, user: GuildMember | PartialGuildMember, newMember: GuildMember): Promise<void> => {
  console.log(history)
  const blockedNicknameRole = <Role>user.guild?.roles.cache.get('960289996382797854')
  if (user && newMember && user.roles.cache.has(blockedNicknameRole?.id)) {
    if (history.length > 0 && history[history.length - 1].identifier === <string>user.user?.username) {
      if (history[history.length - 1].nickname === newMember.nickname) return
    }
    if (user.nickname !== newMember.nickname) {
      const currentUser = user.guild.members.cache.get(user.id)
      // @ts-ignore
      console.log('cant change nickname', newMember.nickname, 'changing to', user.nickname)
      history.push({
        identifier: <string>user.user?.username,
        nickname: <string>user.nickname,
      })
      // @ts-ignore
      currentUser.setNickname(user.nickname ?? user?.user.username)
    }
  }
}

export { handleChange }



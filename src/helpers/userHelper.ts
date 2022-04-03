import { Client, GuildMember, PartialGuildMember, Role } from 'discord.js'

const handleChange = async (client: Client, user: GuildMember | PartialGuildMember, newMember: GuildMember): Promise<void> => {
  const blockedNicknameRole = <Role>user.guild?.roles.cache.get('960289996382797854')
  
  if (user.roles.cache.has(blockedNicknameRole?.id)) {
    console.log('cant change nickname', 'changing to', user.user?.username)
    // @ts-ignore
    user.guild.members.cache.get(user.id).setNickname(user.user?.username ?? 'Pseudo à changer')
  }
}

export { handleChange }



"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[55],{2427:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.0","info":{"version":"13187de (v2)","title":"Labrinth","description":"This API is documented in the **OpenAPI format** and is available for download [here](/openapi.yaml).\\n\\n# Cross-Origin Resource Sharing\\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\\nThis allows for cross-domain communication from the browser.\\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\\n\\n# Authentication\\nThis API uses GitHub tokens for authentication. The token is in the `Authorization` header of the request. You can get a token [here](#operation/initAuth).\\n \\n Example:\\n ```\\n Authorization: gho_pJ9dGXVKpfzZp4PUHSxYEq9hjk0h288Gwj4S\\n ```\\n"},"servers":[{"url":"https://api.modrinth.com/v2","description":"Production server"},{"url":"https://staging-api.modrinth.com/v2","description":"Staging server"}],"tags":[{"name":"projects","x-displayName":"Projects","description":"Projects can be mods or modpacks and are created by users."},{"name":"versions","x-displayName":"Versions","description":"Versions contain download links to files with additional metadata."},{"name":"users","x-displayName":"Users","description":"Users can create projects, join teams, access notifications, manage settings, and follow projects. Admins and moderators have more advanced permissions such as reviewing new projects."},{"name":"teams","x-displayName":"Teams","description":"Through teams, user permissions limit how team members can modify projects."},{"name":"auth","x-displayName":"Auth"},{"name":"project_model","x-displayName":"Project Model","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/Project\\" />\\n"},{"name":"project_result_model","x-displayName":"Search Result Model","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/ProjectResult\\" />\\n"},{"name":"version_model","x-displayName":"Version Model","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/Version\\" />\\n"},{"name":"user_model","x-displayName":"User Model","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/User\\" />\\n"},{"name":"team_member_model","x-displayName":"Team Member Model","description":"<SchemaDefinition schemaRef=\\"#/components/schemas/TeamMember\\" />\\n"}],"x-tagGroups":[{"name":"General","tags":["projects","versions","users","teams","auth"]},{"name":"Models","tags":["project_model","project_result_model","version_model","user_model","team_member_model"]}],"paths":{"/search":{"get":{"summary":"Search projects","operationId":"searchProjects","parameters":[{"in":"query","name":"query","schema":{"type":"string","example":"gravestones"},"description":"The query to search for"},{"in":"query","name":"facets","schema":{"type":"array","items":{"type":"array","items":{"type":"string"}}},"example":"[[\\"categories:forge\\"],[\\"versions:1.17.1\\"],[\\"project_type:mod\\"]]","description":"The recommended way of filtering search results. [Learn more about using facets.](/docs/tutorials/search-facets/)"},{"in":"query","name":"index","schema":{"type":"string","enum":["relevance","downloads","follows","newest","updated"],"default":"relevance","example":"downloads"},"description":"The sorting method used for sorting search results"},{"in":"query","name":"offset","schema":{"type":"integer","default":0,"example":20},"description":"The offset into the search. Skips this number of results"},{"in":"query","name":"limit","schema":{"type":"integer","default":10,"example":20},"description":"The number of results returned by the search"},{"in":"query","name":"filters","schema":{"type":"string","example":"categories=\\"fabric\\" AND (categories=\\"technology\\" OR categories=\\"utility\\")"},"description":"A list of filters relating to the properties of a project. Use filters when there isn\'t an available facet for your needs. [More information](https://docs.meilisearch.com/reference/features/filtering.html)"},{"in":"query","name":"version","schema":{"type":"string","example":"version=\\"1.16.3\\" OR version=\\"1.16.2\\" OR version=\\"1.16.1\\""},"deprecated":true,"description":"A list of filters relating to the versions of a project. Use of facets for filtering by version is recommended"}],"tags":["projects"],"responses":{"200":{"description":"Search results","content":{"application/json":{"schema":{"$ref":"#/components/schemas/SearchResults"}}}},"400":{"description":"Invalid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvalidInputError"}}}}}}},"/project/{id|slug}":{"get":{"summary":"Get a project","operationId":"getProject","tags":["projects"],"parameters":[{"$ref":"#/components/parameters/ProjectIdentifier"}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}}},"404":{"description":"The requested project was not found or no authorization to see this project","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}},"patch":{"summary":"Modify a project","operationId":"modifyProject","tags":["projects"],"parameters":[{"$ref":"#/components/parameters/ProjectIdentifier"}],"requestBody":{"description":"Modified project fields","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditableProject"}}}},"responses":{"204":{"description":"Project modified successfully"},"401":{"description":"No authorization to edit this project","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested project was not found or no authorization to see this project","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}},"delete":{"summary":"Delete a project","operationId":"deleteProject","tags":["projects"],"parameters":[{"$ref":"#/components/parameters/ProjectIdentifier"}],"responses":{"204":{"description":"Project deleted successfully"},"400":{"description":"The requested project was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvalidInputError"}}}},"401":{"description":"No valid authorization to delete this project","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}}}}},"/project":{"post":{"summary":"Create a project","operationId":"createProject","tags":["projects"],"requestBody":{"description":"New project","content":{"multipart/form-data":{"schema":{"$ref":"#/components/schemas/CreatableProject"},"encoding":{"icon":{"contentType":"image/png, image/jpeg, image/bmp, image/gif, image/webp, image/svg, image/svgz, image/rgb"}}}}},"responses":{"200":{"description":"Project successfully created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Project"}}}},"400":{"description":"Invalid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvalidInputError"}}}},"401":{"description":"No authorization to create a project","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}}}}},"/project/{id|slug}/version":{"get":{"summary":"List project\'s versions","operationId":"getProjectVersions","tags":["versions"],"parameters":[{"$ref":"#/components/parameters/ProjectIdentifier"},{"in":"query","name":"loaders","required":false,"description":"The types of loaders to filter for","schema":{"type":"array","items":{"type":"string"},"example":"[\\"fabric\\"]"}},{"in":"query","name":"game_versions","required":false,"description":"The game versions to filter for","schema":{"type":"array","items":{"type":"string"},"example":"[\\"1.18.1\\"]"}},{"in":"query","name":"featured","required":false,"description":"Allows to filter for featured or non-featured versions only","schema":{"type":"boolean"}}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Version"}}}}},"404":{"description":"The requested project was not found or no authorization to see this project"}}}},"/version/{id}":{"get":{"summary":"Get a version","operationId":"getVersion","tags":["versions"],"parameters":[{"$ref":"#/components/parameters/VersionIdentifier"}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Version"}}}},"404":{"description":"The requested version was not found or no authorization to see this version"}}},"patch":{"summary":"Modify a version","operationId":"modifyVersion","tags":["versions"],"parameters":[{"$ref":"#/components/parameters/VersionIdentifier"}],"requestBody":{"description":"Modified version fields","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditableVersion"}}}},"responses":{"204":{"description":"Version modified successfully"},"401":{"description":"No authorization to edit this version","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested version was not found or no authorization to see this version"}}},"delete":{"summary":"Delete a version","operationId":"deleteVersion","tags":["versions"],"parameters":[{"$ref":"#/components/parameters/VersionIdentifier"}],"responses":{"204":{"description":"Version deleted successfully"},"401":{"description":"No authorization to delete this version","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested version was not found or no authorization to see this version","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/version":{"post":{"summary":"Create a version","description":"Project files are attached. `.zip` and `.jar` files are accepted.","operationId":"createVersion","tags":["versions"],"requestBody":{"description":"New version","content":{"multipart/form-data":{"schema":{"$ref":"#/components/schemas/CreatableVersion"}}}},"responses":{"200":{"description":"Version successfully created","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Version"}}}},"400":{"description":"Invalid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/InvalidInputError"}}}},"401":{"description":"No authorization to create this version","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}}}}},"/version/{id}/file":{"post":{"summary":"Add files to version","description":"Project files are attached. `.zip` and `.jar` files are accepted.","operationId":"addFilesToVersion","tags":["versions"],"parameters":[{"$ref":"#/components/parameters/VersionIdentifier"}],"requestBody":{"description":"New version files","content":{"multipart/form-data":{"schema":{"type":"object","properties":{"data":{"type":"object","enum":[{}]}}}}}},"responses":{"204":{"description":"Version modified successfully"},"401":{"description":"No authorization to modify this version","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested version was not found or no authorization to see this version","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/user/{id|username}":{"get":{"summary":"Get a user","operationId":"getUser","tags":["users"],"parameters":[{"$ref":"#/components/parameters/UserIdentifier"}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"$ref":"#/components/schemas/User"}}}},"404":{"description":"The requested user was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}},"patch":{"summary":"Modify a user","operationId":"modifyUser","tags":["users"],"parameters":[{"$ref":"#/components/parameters/UserIdentifier"}],"requestBody":{"description":"Modified user fields","content":{"application/json":{"schema":{"$ref":"#/components/schemas/EditableUser"}}}},"responses":{"204":{"description":"User modified successfully"},"401":{"description":"No authorization to modify this user","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested user was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}},"delete":{"summary":"Delete a user","operationId":"deleteUser","tags":["users"],"parameters":[{"$ref":"#/components/parameters/UserIdentifier"}],"responses":{"204":{"description":"User deleted successfully"},"401":{"description":"No authorization to delete this user","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested user was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/user/{id|username}/projects":{"get":{"summary":"Get user\'s projects","operationId":"getUserProjects","tags":["users"],"parameters":[{"$ref":"#/components/parameters/UserIdentifier"}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Project"}}}}},"404":{"description":"The requested user was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/user/{id|username}/notifications":{"get":{"summary":"Get user\'s notifications","description":"Notifications can be project updates, team invites, or moderator messages","operationId":"getNotifications","tags":["users"],"parameters":[{"$ref":"#/components/parameters/UserIdentifier"}],"security":[{"TokenAuth":[]}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/Notification"}}}}},"401":{"description":"No authorization to get this user\'s notifications","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested user was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/project/{id|slug}/members":{"get":{"summary":"Get a project\'s team members","operationId":"getProjectTeamMembers","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/ProjectIdentifier"}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/TeamMember"},"description":"An array of team members"}}}},"404":{"description":"The requested project was not found or no authorization to see this project","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/team/{id}/members":{"get":{"summary":"Get a team\'s members","operationId":"getTeamMembers","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/TeamIdentifier"}],"responses":{"200":{"description":"Expected response to a valid request","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/TeamMember"},"description":"An array of team members"}}}},"404":{"description":"The requested team was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}},"post":{"summary":"Add a user to a team","operationId":"addTeamMember","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/TeamIdentifier"}],"requestBody":{"description":"User(s) to be added","content":{"application/json":{"schema":{"properties":{"user_id":{"type":"string","example":"EEFFGGHH"}}}}}},"responses":{"204":{"description":"User has been successfully invited to the team"},"401":{"description":"No authorization to modify this team","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested team was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/team/{id}/join":{"post":{"summary":"Join a team","operationId":"joinTeam","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/TeamIdentifier"}],"responses":{"204":{"description":"Team has successfully been joined"},"401":{"description":"No authorization to join this team","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested team was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/team/{team_id}/members/{user_id}":{"patch":{"summary":"Modify a team member\'s roles and/or permissions","operationId":"modifyTeamMember","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/TeamIdentifier"},{"$ref":"#/components/parameters/UserIdentifier"}],"responses":{"204":{"description":"Roles/permissions have been updated successfully"},"401":{"description":"No authorization to change this member\'s roles/permissions","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested team was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}},"delete":{"summary":"Remove a member from a team","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/TeamIdentifier"},{"$ref":"#/components/parameters/UserIdentifier"}],"responses":{"204":{"description":"User has been removed from the team successfully"},"401":{"description":"No authorization to remove this member from the team","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested team was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/team/{id}/owner":{"post":{"summary":"Transfer team\'s ownership to another user","operationId":"transferTeamOwnership","tags":["teams"],"parameters":[{"$ref":"#/components/parameters/TeamIdentifier"}],"requestBody":{"description":"New owner\'s ID","content":{"application/json":{"schema":{"properties":{"user_id":{"type":"string","example":"EEFFGGHH"}}}}}},"responses":{"204":{"description":"Team has successfully been joined"},"401":{"description":"No authorization to join this team","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthError"}}}},"404":{"description":"The requested team was not found","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}}}},"/auth/init":{"get":{"summary":"Initialize authentication","description":"1. Performs a redirect to: https://github.com/login/oauth/authorize?client_id=873e1f2db86d89306227&state=tVPJ27GD&scope=read%3Auser\\n2. Then redirects to [/auth/callback](#operation/authCallback)\\n3. The user is redirected to the given `url` parameter\\n","operationId":"initAuth","tags":["auth"],"parameters":[{"in":"query","name":"url","schema":{"type":"string","example":"https://modrinth.com"},"description":"The URL to redirect to after authentication"}],"responses":{"307":{"headers":{"location":{"schema":{"type":"string","format":"uri","example":"https://github.com/login/oauth/authorize?client_id=873e1f2db86d89306227& state=tVPJ27GD&scope=read%3Auser"}}},"description":"Redirect to Github login page"}}}},"/auth/callback":{"get":{"summary":"Authentication callback","description":"Redirects the user back to the website that started the login process","operationId":"authCallback","tags":["auth"],"parameters":[{"in":"query","name":"code","schema":{"type":"string","example":"e0c1560ab153bbc0b73"},"description":"The token from the GitHub auth"},{"in":"query","name":"state","schema":{"type":"string","example":"AaBb1234"},"description":"The state from the GitHub auth"}],"responses":{"307":{"headers":{"location":{"schema":{"type":"string","format":"uri","example":"https://modrinth.com"}}},"description":"Redirect to the website that initiated the login"}}}}},"components":{"parameters":{"ProjectIdentifier":{"name":"id|slug","in":"path","required":true,"description":"The ID or slug of the project","schema":{"type":"string","example":["AABBCCDD","my_project"]}},"UserIdentifier":{"name":"id|username","in":"path","required":true,"description":"The ID or username of the user","schema":{"type":"string","example":["EEFFGGHH","my_user"]}},"VersionIdentifier":{"name":"id","in":"path","required":true,"description":"The ID of the version","schema":{"type":"string","example":["IIJJKKLL"]}},"TeamIdentifier":{"name":"id","in":"path","required":true,"description":"The ID of the team","schema":{"type":"string","example":["MMNNOOPP"]}}},"schemas":{"BaseProject":{"type":"object","properties":{"slug":{"type":"string","description":"The slug of a project, used for vanity URLs","example":"my_project"},"title":{"type":"string","description":"The title or name of the project","example":"My Project"},"description":{"type":"string","description":"A short description of the project","example":"A short description"},"categories":{"type":"array","items":{"type":"string","example":"technology, adventure, fabric"},"description":"A list of the categories that the project is in"},"client_side":{"type":"string","enum":["required","optional","unsupported"],"description":"The client side support of the project","example":"required"},"server_side":{"type":"string","enum":["required","optional","unsupported"],"description":"The server side support of the project","example":"optional"}},"required":["title","description","categories","client_side","server_side"]},"ServerRenderedProject":{"allOf":[{"$ref":"#/components/schemas/BaseProject"},{"type":"object","properties":{"project_type":{"type":"string","enum":["mod","modpack"],"description":"The project type of the project","example":"mod"},"downloads":{"type":"integer","description":"The total number of downloads of the project"},"icon_url":{"type":"string","example":"https://cdn.modrinth.com/data/AABBCCDD/b46513nd83hb4792a9a0e1fn28fgi6090c1842639.png","description":"The URL of the project\'s icon"}},"required":["project_type","downloads","follows"]}]},"ProjectResult":{"allOf":[{"$ref":"#/components/schemas/ServerRenderedProject"},{"type":"object","properties":{"project_id":{"type":"string","description":"The ID of the project","example":"AABBCCDD"},"author":{"type":"string","description":"The username of the project\'s author","example":"my_user"},"versions":{"type":"array","items":{"type":"string"},"description":"A list of the minecraft versions supported by the project","example":["1.8","1.8.9"]},"follows":{"type":"integer","description":"The total number of users following the project"},"date_created":{"type":"string","format":"date-time","description":"The date the project was created"},"date_modified":{"type":"string","format":"date-time","description":"The date the project was last modified"},"latest_version":{"type":"string","description":"The latest version of minecraft that this project supports","example":"1.8.9"},"license":{"type":"string","description":"The license of the project","example":"mit"}},"required":["project_id","author","versions","follows","date_created","date_modified","license"]}]},"EditableProject":{"allOf":[{"$ref":"#/components/schemas/BaseProject"},{"type":"object","properties":{"body":{"type":"string","description":"A long form description of the mod","example":"A long body describing my project in detail"},"body_url":{"type":"string","deprecated":true,"default":null,"description":"The link to the long description of the project","example":null},"status":{"type":"string","enum":["approved","rejected","draft","unlisted","processing","unknown"],"description":"The status of the project","example":"approved"},"license":{"type":"object","properties":{"id":{"type":"string","description":"The license id of a project, retrieved from the licenses get route","example":"lgpl-3"},"name":{"type":"string","description":"The long name of a license","example":"GNU Lesser General Public License v3"},"url":{"type":"string","description":"The URL to this license","example":"https://cdn.modrinth.com/licenses/lgpl-3.txt"}},"description":"The license of the project"},"issues_url":{"type":"string","description":"An optional link to where to submit bugs or issues with the project","example":"https://github.com/my_user/my_project/issues"},"source_url":{"type":"string","description":"An optional link to the source code of the project","example":"https://github.com/my_user/my_project"},"wiki_url":{"type":"string","description":"An optional link to the project\'s wiki page or other relevant information","example":"https://github.com/my_user/my_project/wiki"},"discord_url":{"type":"string","description":"An optional invite link to the project\'s discord","example":"https://discord.gg/AaBbCcDd"},"donation_urls":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","enum":["patreon","bmac","paypal","github","ko-fi","other"],"description":"The ID of the donation platform","example":"patreon"},"platform":{"type":"string","enum":["Patreon","By Me a Coffee","PayPal","GitHub Sponsors","Ko-Fi","Other"],"description":"The donation platform this link is to","example":"Patreon"},"url":{"type":"string","description":"The URL of the donation platform and user","example":"https://www.patreon.com/my_user"}}},"description":"A list of donation links for the project"}},"required":["body","status","license"]}]},"CreatableProject":{"allOf":[{"$ref":"#/components/schemas/EditableProject"},{"type":"object","properties":{"project_type":{"type":"string","enum":["mod","modpack"],"example":"modpack"},"initial_versions":{"type":"array","items":{"$ref":"#/components/schemas/EditableVersion"},"description":"A list of initial versions to upload with the created project"},"is_draft":{"type":"boolean","description":"Whether the project should be saved as a draft instead of being sent to moderation for review","example":true},"icon":{"type":"string","format":"binary","description":"The icon of the project. Supported types: `.png`, `.jpeg`, `.bmp`, `.gif`, `.webp`, `.svg(z)`, .rgb"}},"required":["project_type"]}]},"Project":{"allOf":[{"$ref":"#/components/schemas/EditableProject"},{"$ref":"#/components/schemas/ServerRenderedProject"},{"type":"object","properties":{"id":{"type":"string","example":"AABBCCDD","description":"The ID of the project, encoded as a base62 string"},"team":{"type":"string","example":"MMNNOOPP","description":"The ID of the team that has ownership of this project"},"moderator_message":{"type":"string","example":null,"description":"A message that a moderator sent regarding the project"},"published":{"type":"string","format":"date-time","description":"The date the project was published"},"updated":{"type":"string","format":"date-time","description":"The date the project was last updated"},"followers":{"type":"integer","description":"The total number of users following the project"},"versions":{"type":"array","items":{"type":"string"},"example":["IIJJKKLL","QQRRSSTT"],"description":"A list of the version IDs of the project"}},"required":["id","team","published","updated","followers","versions"]}]},"SearchResults":{"type":"object","properties":{"hits":{"type":"array","items":{"$ref":"#/components/schemas/ProjectResult"},"description":"The list of results"},"offset":{"type":"integer","description":"The number of results that were skipped by the query","example":0},"limit":{"type":"integer","description":"The number of results that were returned by the query","example":10},"total_hits":{"type":"integer","description":"The total number of results that match the query","example":10}},"required":["hits","offset","limit","total_hits"]},"BaseVersion":{"type":"object","properties":{"name":{"type":"string","description":"The name of this version","example":"Version 1.0.0"},"version_number":{"type":"string","description":"The version number. Ideally will follow semantic versioning","example":"1.0.0"},"changelog":{"type":"string","description":"The changelog for this version","example":"List of changes in this version: ..."},"changelog_url":{"type":"string","description":"A link to the changelog for this version","deprecated":true,"example":null},"dependencies":{"type":"array","items":{"type":"string"},"description":"A list of specific versions of projects that this version depends on","example":["IIJJKKLL","QQRRSSTT"]},"game_versions":{"type":"array","items":{"type":"string"},"description":"A list of versions of Minecraft that this version supports","example":["1.16.5","1.17.1"]},"version_type":{"type":"string","description":"The release channel for this version","enum":["release","beta","alpha"],"example":"release"},"loaders":{"type":"array","items":{"type":"string"},"description":"The mod loaders that this version supports","example":["fabric","forge"]},"featured":{"type":"boolean","description":"Whether the version is featured or not","example":true}},"required":["name","version_number","changelog","dependencies","game_versions","version_type","loaders","featured"]},"EditableVersion":{"allOf":[{"$ref":"#/components/schemas/BaseVersion"},{"type":"object","properties":{"file_parts":{"type":"array","items":{"type":"string"},"description":"An array of the multipart field names of each file that goes with this version"}},"required":["file_parts"]}]},"CreatableVersion":{"allOf":[{"type":"object","properties":{"data":{"allOf":[{"$ref":"#/components/schemas/BaseVersion"},{"type":"object","properties":{"file_parts":{"type":"array","items":{"type":"string","description":"An array of the multipart field names of each file that goes with this version"}}},"required":["file_parts"]}]}},"required":["data"]}]},"Version":{"allOf":[{"$ref":"#/components/schemas/BaseVersion"},{"type":"object","properties":{"id":{"type":"string","description":"The ID of the version, encoded as a base62 string","example":"IIJJKKLL"},"project_id":{"type":"string","description":"The ID of the project this version is for","example":"AABBCCDD"},"author_id":{"type":"string","description":"The ID of the author who published this version","example":"EEFFGGHH"},"date_published":{"type":"string","format":"date-time"},"downloads":{"type":"integer","description":"The number of times this version has been downloaded"},"files":{"type":"array","items":{"type":"object","properties":{"hashes":{"type":"object","properties":{"sha512":{"type":"string","example":"93ecf5fe02914fb53d94aa3d28c1fb562e23985f8e4d48b9038422798618761fe208a31ca9b723667a4e05de0d91a3f86bcd8d018f6a686c39550e21b198d96f"},"sha1":{"type":"string","example":"c84dd4b3580c02b79958a0590afd5783d80ef504"}},"description":"A map of hashes of the file. The key is the hashing algorithm and the value is the string version of the hash."},"url":{"type":"string","example":"https://cdn.modrinth.com/data/AABBCCDD/versions/1.0.0/my_file.jar","description":"A direct link to the file"},"filename":{"type":"string","example":"my_file.jar","description":"The name of the file"},"primary":{"type":"boolean","example":false}},"required":["hashes","url","filename","primary"]},"description":"A list of files available for download for this version"}},"required":["id","project_id","author_id","date_published","downloads"]}]},"EditableUser":{"type":"object","properties":{"username":{"type":"string","description":"The user\'s username","example":"my_user"},"name":{"type":"string","example":"My User","description":"The user\'s display name"},"email":{"type":"string","format":"email","description":"The user\'s email"},"bio":{"type":"string","example":"My short biography","description":"A description of the user"}},"required":["username"]},"User":{"allOf":[{"$ref":"#/components/schemas/EditableUser"},{"type":"object","properties":{"id":{"type":"string","example":"EEFFGGHH","description":"The user\'s id"},"github_id":{"type":"integer","example":11223344,"description":"The user\'s github id"},"avatar_url":{"type":"string","example":"https://avatars.githubusercontent.com/u/11223344?v=1","description":"The user\'s avatar url"},"created":{"type":"string","format":"date-time","description":"The time at which the user was created"},"role":{"type":"string","enum":["admin","moderator","developer"],"description":"The user\'s role","example":"developer"}},"required":["id","created","role"]}]},"Notification":{"type":"object","properties":{"id":{"type":"string","description":"The id of the notification","example":"UUVVWWXX"},"user_id":{"type":"string","description":"The id of the user who received the notification","example":"EEFFGGHH"},"type":{"type":"string","description":"The type of notification","example":"project_update"},"title":{"type":"string","description":"The title of the notification","example":"My Project has been updated!"},"text":{"type":"string","description":"The body text of the notification","example":"The project, My Project, has released a new version: 1.0.0"},"link":{"type":"string","description":"A link to the related project or version","example":"project/AABBCCDD/version/IIJJKKLL"},"read":{"type":"boolean","example":false,"description":"Whether the notification has been read or not"},"created":{"type":"string","format":"date-time","description":"The time at which the notification was created"},"actions":{"type":"array","items":{"type":"object"},"description":"A list of actions that can be performed"}},"required":["id","user_id","title","text","link","read","created","actions"]},"TeamMember":{"type":"object","properties":{"team_id":{"type":"string","example":"MMNNOOPP","description":"The ID of the team this team member is a member of"},"user":{"$ref":"#/components/schemas/User"},"role":{"type":"string","example":"Member","description":"The user\'s role on the team"},"permissions":{"type":"integer","example":127,"description":"The user\'s permissions in bitflag format (requires authorization)"},"accepted":{"type":"boolean","example":true,"description":"Whether or not the user has accepted to be on the team (requires authorization)"}},"required":["team_id","user","role","accepted"]},"InvalidInputError":{"type":"object","properties":{"error":{"type":"string","description":"The name of the error","example":"invalid_input"},"description":{"type":"string","description":"The contents of the error","example":"Error while parsing multipart payload"}},"required":["error","description"]},"AuthError":{"type":"object","properties":{"error":{"type":"string","description":"The name of the error","example":"unauthorized"},"description":{"type":"string","description":"The contents of the error","example":"Authentication Error: Invalid Authentication Credentials"}},"required":["error","description"]},"NotFoundError":{"type":"object","properties":{"error":{"type":"string","description":"The name of the error","example":"not_found"},"description":{"type":"string","description":"The contents of the error","example":"the requested route does not exist"}},"required":["error","description"]}},"securitySchemes":{"TokenAuth":{"type":"apiKey","in":"header","name":"Authorization"}}}}}')}}]);
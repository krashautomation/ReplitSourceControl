import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  GitBranch, 
  History, 
  Home as HomeIcon, 
  Folder, 
  GitPullRequest, 
  Plus, 
  Upload, 
  Star, 
  Eye, 
  Users,
  FileCode,
  ChevronDown,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const navItems = [
    { icon: HomeIcon, label: "Overview", active: true },
    { icon: History, label: "Commits", active: false },
    { icon: GitBranch, label: "Branches", active: false },
    { icon: Folder, label: "Files", active: false },
    { icon: GitPullRequest, label: "Pull Requests", active: false },
  ];

  const quickActions = [
    { icon: Plus, label: "New Branch" },
    { icon: Upload, label: "Push Changes" },
  ];

  const stats = [
    { value: "127", label: "Commits", icon: History, color: "blue" },
    { value: "8", label: "Branches", icon: GitBranch, color: "green" },
    { value: "3", label: "Contributors", icon: Users, color: "purple" },
    { value: "42", label: "Files", icon: FileCode, color: "amber" },
  ];

  const commits = [
    {
      message: "Fix navigation bug in header component",
      author: "john-dev",
      time: "2 minutes ago",
      hash: "a7b3c9d",
      color: "green",
    },
    {
      message: "Add dark mode toggle functionality",
      author: "sarah-design",
      time: "1 hour ago",
      hash: "f2e8d1a",
      color: "blue",
    },
    {
      message: "Update README with installation instructions",
      author: "mike-docs",
      time: "3 hours ago",
      hash: "9c4f7e2",
      color: "purple",
    },
  ];

  const branches = [
    { name: "main", commits: "3 commits ahead", status: "Active", color: "green" },
    { name: "feature/dark-mode", commits: "2 commits ahead", status: "Feature", color: "blue" },
    { name: "hotfix/navigation-bug", commits: "1 commit ahead", status: "Hotfix", color: "red" },
  ];

  const files = [
    { name: "src/", type: "folder", time: "2 hours ago" },
    { name: "public/", type: "folder", time: "1 day ago" },
    { name: "package.json", type: "file", time: "3 hours ago" },
    { name: "README.md", type: "file", time: "3 hours ago" },
    { name: ".gitignore", type: "file", time: "1 week ago" },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 text-blue-400",
      green: "bg-green-500/20 text-green-400",
      purple: "bg-purple-500/20 text-purple-400",
      amber: "bg-amber-500/20 text-amber-400",
      red: "bg-red-500/20 text-red-400",
    };
    return colorMap[color as keyof typeof colorMap] || "bg-slate-500/20 text-slate-400";
  };

  const getBadgeClasses = (status: string) => {
    const statusMap = {
      Active: "bg-green-900 text-green-300",
      Feature: "bg-blue-900 text-blue-300",
      Hotfix: "bg-red-900 text-red-300",
    };
    return statusMap[status as keyof typeof statusMap] || "bg-slate-900 text-slate-300";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* Logo and Title */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <GitBranch className="text-white w-4 h-4" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-slate-50">Replit Source Control</h1>
              <p className="text-xs text-slate-400">Version Control Hub</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  item.active 
                    ? "bg-slate-800 text-slate-50 hover:bg-slate-800" 
                    : "text-slate-400 hover:text-slate-50 hover:bg-slate-800"
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-500 font-medium mb-2 px-3">QUICK ACTIONS</p>
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="ghost"
                className="w-full justify-start gap-3 text-slate-400 hover:text-slate-50 hover:bg-slate-800"
                data-testid={`action-${action.label.toLowerCase().replace(" ", "-")}`}
              >
                <action.icon className="w-4 h-4" />
                {action.label}
              </Button>
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-white">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-50 truncate">John Developer</p>
              <p className="text-xs text-slate-400 truncate">john@replit.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-slate-900 border-b border-slate-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-slate-50">my-awesome-project</h1>
              <p className="text-sm text-slate-400 mt-1">
                <span>main branch</span> • 
                <span className="text-green-400">3 commits ahead</span> • 
                <span>Last updated 2 minutes ago</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-slate-400 hover:text-slate-50" data-testid="button-star">
                <Star className="w-4 h-4 mr-2" />
                Star
              </Button>
              <Button variant="ghost" className="text-slate-400 hover:text-slate-50" data-testid="button-watch">
                <Eye className="w-4 h-4 mr-2" />
                Watch
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" data-testid="button-clone">
                <GitBranch className="w-4 h-4 mr-2" />
                Clone
              </Button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Repository Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-slate-800 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-slate-50" data-testid={`stat-${stat.label.toLowerCase()}`}>
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Commits */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="text-slate-50">Recent Commits</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {commits.map((commit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
                    data-testid={`commit-${index}`}
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      commit.color === 'green' ? 'bg-green-400' :
                      commit.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-50 truncate">{commit.message}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        <span>{commit.author}</span> • <span>{commit.time}</span> • 
                        <span className="font-mono"> {commit.hash}</span>
                      </p>
                    </div>
                  </div>
                ))}
                <Separator className="bg-slate-700" />
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 w-full justify-start p-0" data-testid="button-view-commits">
                  View all commits <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Branch Status */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="text-slate-50">Active Branches</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                {branches.map((branch, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
                    data-testid={`branch-${index}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        branch.color === 'green' ? 'bg-green-400' :
                        branch.color === 'blue' ? 'bg-blue-400' : 'bg-amber-400'
                      }`}></div>
                      <div>
                        <p className="text-sm font-medium text-slate-50">{branch.name}</p>
                        <p className="text-xs text-slate-400">{branch.commits}</p>
                      </div>
                    </div>
                    <Badge className={getBadgeClasses(branch.status)}>
                      {branch.status}
                    </Badge>
                  </div>
                ))}
                <Separator className="bg-slate-700" />
                <Button className="w-full bg-slate-700 hover:bg-slate-600 text-slate-50" data-testid="button-new-branch">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Branch
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* File Explorer */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="border-b border-slate-700">
              <div className="flex items-center justify-between">
                <CardTitle className="text-slate-50">Repository Files</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400">main branch</span>
                  <Button variant="ghost" size="sm" className="p-1 h-auto" data-testid="button-branch-selector">
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-700">
                {files.map((file, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 hover:bg-slate-700/50 transition-colors cursor-pointer"
                    data-testid={`file-${index}`}
                  >
                    {file.type === 'folder' ? (
                      <Folder className="text-blue-400 w-4 h-4" />
                    ) : (
                      <FileCode className={file.name.endsWith('.json') ? 'text-green-400' : 'text-slate-400'} className="w-4 h-4" />
                    )}
                    <span className="flex-1 text-sm text-slate-50">{file.name}</span>
                    <span className="text-xs text-slate-400">{file.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
